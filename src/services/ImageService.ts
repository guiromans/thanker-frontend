import axios, { AxiosResponse } from "axios";
import imageCompression from "browser-image-compression";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent } from "react";

export class ImageService {

    async compressAndSend(fileEvent: ChangeEvent<HTMLInputElement>, presignedUrl: string): Promise<AxiosResponse | undefined> {
        try {
            const compressedImage = await this.compress(fileEvent);
            if (compressedImage !== null) {
                const response = await axios.put(presignedUrl, compressedImage, {
                    headers: {
                        'Content-Type': compressedImage.type,
                        //'Cache-Control': 'max-age=120',
                        //'Expires': new Date(Date.now() + 60 * 2 * 1000).toUTCString()
                    }
                });
                console.log("Got response:", response);
                return response;
            } else {
                enqueueSnackbar("Need to select image", { variant: 'error' });
                return undefined;
            }
        } catch (error) {
            console.error("Error during compression or send:", error);
            throw error;
        }
    }

    private async compress(event: ChangeEvent<HTMLInputElement>): Promise<File | null> {
        if (event.target.files === null) {
            return null;
        }

        const imageFile: File = event.target.files[0];
        const options = {
            maxSizeMB: 5
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);

            return compressedFile;
        } catch (error) {
            console.error("Error compressing image:", error);
            return null;
        }
    }

}