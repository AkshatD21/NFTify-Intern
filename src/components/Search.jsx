import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import "./i.css"; 

const InputIcon = () => {
  return (
    <div className="flex justify-between">
      <div className="mx-10">
        <div className="w-72">
          <Input
            className="custom-input text-white"
            label="Search"
            icon={<i class="fa-solid fa-heart"></i>}
          />
        </div>
      </div>

      <div className="mx-10 ">
        <Button className="btn" variant="gradient">
          Connect
        </Button>
      </div>
    </div>
  );
}

export default InputIcon
