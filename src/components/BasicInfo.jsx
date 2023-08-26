import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MyCard = ({item}) => {
  return (
    <Card className="mt-6 w-auto h-100 bg-[#390554] text-white">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="text-white">Basic Info</p>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Pair created at</div> <div>{item.pairCreatedAt}</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Symbol</div> <div>Ethereum</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Dex ID</div> <div>{item.dexId}</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Pair Address</div>{" "}
          <div className="truncate">{item.pairAddress}</div>
        </Typography>
      </CardBody>
    </Card>
  );
}

export default MyCard;
