import {
  Button,
  Card,
  CardBody,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React from "react";

//! BLOM KELAR
export const FilterAdmin = ({
  open,
  onClose,
  category,
  type,
  level,
  handleCategory,
  handleType,
  handleLevel,
  getFilter,
  setFilter,
}) => {

  const handleClear = () => {
    setFilter({ category: "", type: "", level: "" });
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose}
        placement="right"
        className="p-4 overflow-y-scroll"
        size={400}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Filter
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* KATEGORI KELAS */}
        <Card>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              Kategori Kelas
            </Typography>
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="uiuxDesign"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="uiuxDesign"
                      id="uiuxDesign"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="1"
                      checked={category === "1"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    UI/UX Design
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="productManagement"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="productManagement"
                      id="productManagement"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="2"
                      checked={category === "2"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Product Management
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="webDevelopment"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="webDevelopment"
                      id="webDevelopment"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="3"
                      checked={category === "3"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Web Development
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="androidDevelopment"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="androidDevelopment"
                      id="androidDevelopment"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="4"
                      checked={category === "4"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Android Development
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="iosDevelopment"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="iosDevelopment"
                      id="iosDevelopment"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="5"
                      checked={category === "5"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    IOS Development
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="dataScience"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="dataScience"
                      id="dataScience"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="6"
                      checked={category === "6"}
                      onChange={(e) => handleCategory(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Data Science
                  </Typography>
                </label>
              </ListItem>
            </List>
          </CardBody>
        </Card>
        {/* END KATEGORI KELAS */}
        {/* Tipe Kelas */}
        <Card className="my-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              Tipe Kelas
            </Typography>
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="beginner"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="beginner"
                      id="beginner"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="1"
                      checked={type === "1"}
                      onChange={(e) => handleType(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Beginner
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="intermediate"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="intermediate"
                      id="intermediate"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="2"
                      checked={type === "2"}
                      onChange={(e) => handleType(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Intermediate
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="advanced"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="advanced"
                      id="advanced"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="3"
                      checked={type === "3"}
                      onChange={(e) => handleType(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Advanced
                  </Typography>
                </label>
              </ListItem>
            </List>
          </CardBody>
        </Card>
        {/* END Tipe Kelas */}
        {/* Level Kelas */}
        <Card className="my-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              Level Kelas
            </Typography>
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="kelasGratis"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="kelasGratis"
                      id="kelasGratis"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="1"
                      checked={level === "1"}
                      onChange={(e) => handleLevel(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Gratis
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="kelasPremium"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="kelasPremium"
                      id="kelasPremium"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      value="2"
                      checked={level === "2"}
                      onChange={(e) => handleLevel(e)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Premium
                  </Typography>
                </label>
              </ListItem>
            </List>
          </CardBody>
        </Card>
        {/* END Level Kelas */}
        <div className="flex gap-2 justify-between">
          <Button size="sm" variant="outlined" onClick={handleClear}>
            Bersihkan
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
