import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const userPhoto = await uploadPhoto();
    const userInfo = await createUser();
    return {
      photo: userPhoto,
      user: userInfo,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
