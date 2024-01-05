import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((res) => {
      for (const obj of res) {
        if (obj.status === 'rejected') {
          obj.value = `${obj.reason}`;
          delete obj.reason;
        }
        // console.log(obj);
      }
      return (res);
    });
}
