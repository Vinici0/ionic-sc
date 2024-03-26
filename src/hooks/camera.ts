import { useEffect, SetStateAction, Dispatch } from "react";
import { isPlatform, useIonAlert } from "@ionic/react";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";
import { CustomPhoto } from "../interfaces/interfaces";

const PHOTO_STORAGE = "photos";

export function usePhotoGallery(
  setPhotos: Dispatch<SetStateAction<CustomPhoto[]>>
) {
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });

      const photosInPreferences = (
        value ? JSON.parse(value) : []
      ) as CustomPhoto[];
      if (!isPlatform("hybrid")) {
        for (let photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  const takePhoto = async (type: string) => {
    try {
      let source = undefined;
      if (type === "gallery") {
        source = CameraSource.Photos;
      } else if (source === "camera") {
        source = CameraSource.Camera;
      }
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: source,
        presentationStyle: "popover",
        saveToGallery: true,
        width: 800,
        height: 800,
        quality: 100,
      });

      const fileName = Date.now() + ".jpeg";
      const savedFileImage = await savePicture(photo, fileName);
      const newPhotos = [savedFileImage];
      setPhotos(newPhotos);
    } catch (e) {
      if (
        e != "Error: User cancelled photos app" &&
        e != "Error: No image picked"
      ) {
        presentAlert({
          header: "Error",
          subHeader: "Ha ocurrido un error al tomar la imagen",
          message: String(e),
          buttons: ["Aceptar"],
        });
      }
    }
  };

  const savePicture = async (
    photo: Photo,
    fileName: string
  ): Promise<CustomPhoto> => {
    let base64Data: string;
    if (isPlatform("hybrid")) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = String(file.data);
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform("hybrid")) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  return {
    takePhoto,
  };
}

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("method did not return a string");
      }
    };
    reader.readAsDataURL(blob);
  });
}

export function blobFromBase64(
  b64Data: string,
  contentType = "",
  sliceSize = 512
) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
