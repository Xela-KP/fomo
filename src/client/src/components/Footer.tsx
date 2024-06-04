import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import Brand from './Brand';

export default () => {
    return (
        <Footer container className=" border-t-4 border-teal-600">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <Brand />
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://alexander-perocho.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Creator
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="https://alexander-perocho.vercel.app"
                        by="Alexander Perocho"
                        year={2024}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://www.facebook.com/hagurosfire/"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="https://www.instagram.com/perocho.xela/"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="https://github.com/Xela-KP"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={BsGithub}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
};
