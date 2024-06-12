import { FileInput, Select, TextInput } from 'flowbite-react';

export const CreatePostPage = () => {
    return (
        <section className="min-h-screen max-w-3xl mx-auto">
            <h1 className="text-3xl text-center my-7">New Event</h1>
            <form className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <TextInput className="flex-1" placeholder="Event Name" />
                    <Select>
                        <option value="uncategorized">Select Category</option>
                    </Select>
                </div>
                <div className="flex flex-col items-center justify-between border-4 border-black-100">
                    <FileInput />
                </div>
            </form>
        </section>
    );
};
