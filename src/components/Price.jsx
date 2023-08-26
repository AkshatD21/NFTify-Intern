import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Price = ({ item }) => {
  return (
    <Card className="mt-6 w-auto h-100 bg-[#390554] text-white">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="text-white">Price</p>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Price Native</div> <div>{item.priceNative}</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Price USD</div> <div>{item.priceUsd}</div>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Price;
