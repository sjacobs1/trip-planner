import { UnsplashImage } from "../models/unsplashImage";

export async function getUnsplashImage(): Promise<UnsplashImage> {
    const response = await fetch("https://api.unsplash.com/photos/random?collections=11484844&orientation=landscape&content_filter=high&count=1&client_id=4kAlW_Ksh_SsGsHYPvB8C2lSuzwfGw87p23PmyIXghk")
    const data = await response.json();
    return Array.isArray(data) ? data[0] : data;
}