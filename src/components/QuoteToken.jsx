import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const QuoteToken = ({ item }) => {
  return (
    <Card className="mt-6 w-auto h-100 bg-[#390554] text-white">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="text-white">Quote Token</p>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Name</div> <div>{item.quoteToken.name}</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Symbol</div> <div>{item.quoteToken.symbol}</div>
        </Typography>
        <Typography className="grid grid-cols-2 gap-3">
          <div>Address</div>{" "}
          <div className="truncate">{item.quoteToken.address}</div>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default QuoteToken;
