import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Checkbox
} from "@material-tailwind/react";

 
 
function QuizForm() {
  const [type, setType] = React.useState("card");
 
  return (
    <div className="flex flex-col items-center justify-center text-filson">
    <div className="text-center lg:mt-8 min-[320px]:mt-14 lg:text-[40px] min-[320px]:text-[28px] text-blue text-semibold"><h2>Start MCQ Quiz!</h2></div>
      <Card className="flex items-center justify-center lg:w-[700px] min-[320px]:w-auto h-auto bg-purple text-filson min-[320px]:m-8 lg:m-0">
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
              Page 1
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Page 2
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
                <TabPanel value="card" className="p-0">
                  <form className="mt-10 flex flex-col gap-4">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        What does HTML stands for?
                      </Typography>
                      <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

<Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      /> 

                      <Button className="mt-2 bg-[#9300ff] shadow-xl shadow-purple w-[100px] h-auto" fullWidth>
                        Next
                      </Button>
                    </div>
                  </form>
                </TabPanel>


                <TabPanel value="paypal" className="p-0">
                <form className="mt-10 flex flex-col gap-4">

                  <div className="mb-1 flex flex-col gap-6">

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                  How is document type initialized in HTML5.?
                  </Typography>
                                      <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Which of the following HTML Elements is used for making any text bold ?
                  </Typography>

                  <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

<Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

<Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />

<Typography variant="h6" color="blue-gray" className="-mb-3">
                        Which of the following HTML Elements is used for making any text bold ?
                        </Typography>

                        <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-20px]"
                        >
                          Hypertext Machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-20px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                        Hypertext and links markup language
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hypertext Markup Language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />
                                <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal mt-[-30px]"
                        >
                          Hightext machine language.
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5 mt-[-35px]" }}
                      />




                  <Button className="mt-2 bg-[#9300ff] shadow-xl shadow-purple" fullWidth>
                    Complete
                  </Button>
                  </div>

                </form>
                </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default QuizForm;