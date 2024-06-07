import { Card, Label } from 'flowbite-react';

export default () => {
    return (
        <Card>
            <Label className="text-2xl">General Information</Label>
            <div>
                <Label className="text-md">About me</Label>
                <p className="text-gray-500 max-w-lg">
                    Wood barred Brave right brace! Ransom suffering reclaiming
                    Uruk-hai cur hazel exceeding crossed astray ranks
                    determined. Remuneration west limp Hardly accept that'll
                    advice disturber duty permitted nighttime troubles! Freda
                    invited promises. Unfair slip Pippin's feeling achieve hours
                    setting. Owe ring Freda shall actually arise forgotten
                    one-fourteenth soldier commoners forged.
                </p>
            </div>
            <div className="flex flex-col">
                <Label className="text-gray-600">Join Date</Label>
                <Label className="text-md">06-05-2024</Label>
            </div>
        </Card>
    );
};
