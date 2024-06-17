// import { Card, Label, Textarea } from 'flowbite-react';

// import type { ChangeEventHandler } from 'react';
// import type { RootState } from '../../../redux/store';
// import type User from '../../../../../shared/models/User';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// export const InformationSettingsCard = () => {
//     const { currentUser } = useSelector((state: RootState) => state.user);
//     const { about } = currentUser as User;
//     const [clientAbout, updateClientAbout] = useState(about);
//     const onAboutChange: ChangeEventHandler<HTMLTextAreaElement> = (
//         e: React.ChangeEvent<HTMLTextAreaElement>
//     ) => {
//         updateClientAbout(e.target.value);
//     };
//     return (
//         <Card>
//             <Label className="text-2xl">General Information</Label>
//             <div>
//                 <Label className="text-md">About me</Label>
//                 <Textarea
//                     rows={5}
//                     value={clientAbout}
//                     onChange={onAboutChange}
//                 />
//             </div>
//             <div className="flex flex-col">
//                 <Label className="text-gray-600">Join Date</Label>
//                 <Label className="text-md">06-05-2024</Label>
//             </div>
//         </Card>
//     );
// };
export const InformationSettingsCard = () => <></>;
