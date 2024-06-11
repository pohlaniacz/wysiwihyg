import { getDownloadURL, ref, storage, uploadBytes } from "../external/firebase";
import {generateRandomName} from "./randomName";

export const uploadImage = async (file, singleId) => {
    const randomName = generateRandomName();
    const filePath = `blocks/${singleId}/${randomName}.jpg`;
    const fileRef = ref(storage, filePath);

    try {
        const snapshot = await uploadBytes(fileRef, file);
        return await getDownloadURL(snapshot.ref);
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
    }
};
