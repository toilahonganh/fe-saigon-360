import Image from "next/image";
import { Images } from "../shared";

export default function Logo() {
    return (
        <div>
            <Image
                src={Images.logo}
                width={300}
                height={300} 
                alt={"logo"}           
            />
        </div>
    )
}