import { AppInstallationParameters, BackendParameters } from './types';

export const DEFAULT_APP_INSTALLATION_PARAMETERS: AppInstallationParameters = {
  cloudName: '',
  apiKey: '',
  maxFiles: 10,
  startFolder: '',
  quality: 'auto',
  format: 'auto',
  installationUuid: '',
  showUploadButton: 'true',
};
export const DEFAULT_BACKEND_PARAMETERS: BackendParameters = {
  apiSecret: '',
};
export const VALID_IMAGE_FORMATS = ['svg', 'jpg', 'png', 'gif', 'jpeg', 'tiff', 'ico', 'webp', 'pdf', 'bmp', 'psd', 'eps', 'jxr', 'wdp', 'avif'];
export const BACKEND_BASE_URL = import.meta.env.VITE_CLOUDINARY_BACKEND_BASE_URL;
export const APP_VERSION = import.meta.env.VITE_APP_VERSION;
export const APP_ENV = import.meta.env.MODE;
