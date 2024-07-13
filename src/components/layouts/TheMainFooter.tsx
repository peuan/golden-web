import { Divider, Image, Link } from "@nextui-org/react";
import Logo from "../../assets/images/logo.svg";

const TheMainFooter = () => {
  return (
    <footer className="bg-lighten-gradient">
      <div className="container mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <img className="pb-2" {...Logo} />
            <h6>Golden Corporation Co., Ltd.</h6>
            <span className="text-sm">
              111 True Digital Park West, Unicorn Building, 10th floor, Unit no.
              1015, 1018 Sukhumvit Road, Bangchak, Phra Khanong, Bangkok 10260
            </span>
          </div>
          <div>
            <span>TODO</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="py-4 text-sm bg-lighten-gradient">
        <div className="container mx-auto">
          <div className="flex justify-center gap-4 h-5">
            <Link color="foreground">Terms of Service</Link>
            <Divider orientation="vertical" />
            <Link color="foreground">Privacy Policy</Link>
            <Divider orientation="vertical" />
            <Link color="foreground">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheMainFooter;
