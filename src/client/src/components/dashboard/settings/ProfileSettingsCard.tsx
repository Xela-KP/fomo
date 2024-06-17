// import 'react-circular-progressbar/dist/styles.css';

// import { Alert, Button, Card, Modal, TextInput } from 'flowbite-react';
// import type { ChangeEvent, ChangeEventHandler, MouseEventHandler } from 'react';
// // import {
// //     StorageError,
// //     getDownloadURL,
// //     getStorage,
// //     ref,
// //     uploadBytesResumable,
// // } from 'firebase/storage';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRef, useState } from 'react';

// import { CircularProgressbar } from 'react-circular-progressbar';
// import { HiOutlineExclamationCircle } from 'react-icons/hi2';
// import type { RootState } from '../../../redux/store';

// // import type { UploadTaskSnapshot } from 'firebase/storage';
// // import type User from '../../../../../shared/models/User';
// // import { app } from '../../../firebase';
// // import { resetUserState } from '../../../redux/user/userSlice';

// export const ProfileSettingsCard = () => {
//     // useEffect(() => {
//     //     if (!(imageFile && imageFile.name.match(/\.(jpg|jpeg|png|gif)$/i)))
//     //         return;

//     //     setUploadError(undefined);
//     //     setUploading(true);
//     //     const storage = getStorage(app);
//     //     const fileName = new Date().getTime() + (imageFile as File).name;
//     //     const storageRef = ref(storage, fileName);
//     //     const uploadTask = uploadBytesResumable(storageRef, imageFile as File);

//     //     const observeProgress = (snapshot: UploadTaskSnapshot) => {
//     //         const progress =
//     //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     //         setUploadProgess(parseInt(progress.toFixed(0)));
//     //     };

//     //     const onError = (error: StorageError) => {
//     //         setUploadError(error.message);
//     //         setUploading(false);
//     //     };

//     //     const onComplete = async () => {
//     //         const snapshotRef = uploadTask.snapshot.ref;
//     //         const downloadURL = await getDownloadURL(snapshotRef);
//     //         const body = { newImageUrl: downloadURL };
//     //         const req: RequestInit = {
//     //             method: 'PUT',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(body),
//     //         };
//     //         const res = await fetch(`/api/user/update/${id}/pfp`, req);
//     //         if (res.ok) {
//     //             dispatch(updateProfilePicture(downloadURL));
//     //         }
//     //         setUploading(false);
//     //     };
//     //     uploadTask.on('state_changed', observeProgress, onError, onComplete);
//     // }, [imageFile, dispatch, id]);

//     // const onImageChange: ChangeEventHandler<HTMLInputElement> = (
//     //     e: ChangeEvent<HTMLInputElement>
//     // ) => {
//     //     setUploadError(undefined);
//     //     try {
//     //         const { files } = e.target;
//     //         if (!files) throw new Error('No Files Selected');
//     //         const [file] = files;
//     //         if (!file.name.match(/\.(jpg|jpeg|png|gif)$/i))
//     //             throw new Error('File must be an image');
//     //         setImageFile(file);
//     //     } catch (error) {
//     //         console.log(error);
//     //         setUploadError('File must be an Image');
//     //     }
//     // };

//     // const onBioChange: ChangeEventHandler<HTMLInputElement> = (e) =>
//     //     setClientBio(e.target.value);

//     // const updateUserBio: MouseEventHandler = async () => {
//     //     try {
//     //         const body = { bio: clientBio };
//     //         const req: RequestInit = {
//     //             method: 'PUT',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(body),
//     //         };
//     //         const res = await fetch(`/api/user/update/${id}/bio`, req);
//     //         if (res.ok) {
//     //             dispatch((updateBio(clientBio)));
//     //         }
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // };

//     // const deleteAccount = async () => {
//     //     try {
//     //         const req: RequestInit = { method: 'DELETE' };
//     //         const res = await fetch(`/api/user/delete/${id}`, req);
//     //         if (res.ok) dispatch(resetUserState());
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // };

//     return (
//         <Card className="">
//             <div className="w-64 p-3">
//                 <div className="mb-2 flex flex-col gap-2">
//                     <span className="relative w-fit h-fit">
//                         {/* {uploading && (
//                             <CircularProgressbar
//                                 value={uploadProgess || 0}
//                                 text={`${uploadProgess}%`}
//                                 strokeWidth={5}
//                                 styles={{
//                                     root: {
//                                         width: '100%',
//                                         height: '100%',
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                     },
//                                     path: {
//                                         stroke: `rgba(62, 152, 199, ${
//                                             uploadProgess / 100
//                                         })`,
//                                     },
//                                 }}
//                             />
//                         )} */}
//                         <img className="h-10 w-10 rounded-full cursor-pointer" />
//                     </span>
//                     <input
//                         disabled={true}
//                         type="file"
//                         accept="image/.*"
//                         onChange={() => {}}
//                         ref={() => {}}
//                         hidden
//                     />
//                     {/* {uploadError && (
//                         <Alert color="failure">{uploadError}</Alert>
//                     )} */}
//                 </div>
//                 <p className="text-base font-semibold leading-none text-gray-900 dark:text-white mb-2">
//                     <a href="#" className="hover:underline">
//                         {/* @{username} */}
//                     </a>
//                 </p>
//                 <span className="flex flex-row gap-2">
//                     <TextInput
//                         placeholder="Bio"
//                         // value={clientBio}
//                         onChange={() => {}}
//                     />
//                     <Button
//                         size="xs"
//                         outline
//                         pill
//                         gradientDuoTone="tealToLime"
//                         className="w-fit self-center"
//                         onClick={() => {}}
//                     >
//                         Save
//                     </Button>
//                 </span>

//                 <Button
//                     color="red"
//                     size="xs"
//                     className="w-fit mt-2"
//                     onClick={() => {}}
//                 >
//                     Delete Account
//                 </Button>
//                 <Modal show={true} size="md" onClose={() => {}} popup>
//                     <Modal.Header />
//                     <Modal.Body>
//                         <div className="text-center">
//                             <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
//                             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//                                 Are you sure you want to delete your account?{' '}
//                                 <br />
//                                 This action cannot be undone.
//                             </h3>
//                             <div className="flex justify-center gap-4">
//                                 <Button color="failure" onClick={() => {}}>
//                                     {'Delete my account.'}
//                                 </Button>
//                                 <Button color="gray" onClick={() => {}}>
//                                     Cancel
//                                 </Button>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//                 <p className="mb-4 text-sm"></p>
//                 {/* <ul className="flex text-sm">
//                     <li className="me-2">
//                         <a href="#" className="hover:underline">
//                             <span className="font-semibold text-gray-900 dark:text-white">
//                                 799
//                             </span>
//                             <span>Following</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="hover:underline">
//                             <span className="font-semibold text-gray-900 dark:text-white">
//                                 3,758
//                             </span>
//                             <span>Followers</span>
//                         </a>
//                     </li>
//                 </ul> */}
//             </div>
//         </Card>
//     );
// };
export const ProfileSettingsCard = () => <></>;
