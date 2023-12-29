import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import FormInput from "../form/FormInput";
import { postNotif } from "../../services/create-notif";
import { toast } from "react-toastify";
export const PostNotif = ({ open, handler }) => {
  const [formNotification, setFormNotification] = useState({
    title: "",
    body: "",
    is_all_user: true,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormNotification({ ...formNotification, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      title: formNotification.title,
      body: formNotification.body,
      is_all_user: formNotification.is_all_user,
    };
    try {
      const response = await postNotif(formData);
      console.log(response);
      handler();
      setLoading(false);
      toast.success("Broadcast Notification Success");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("error");
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open} handler={handler}>
        
        <DialogHeader>Kirim Notifikasi Ke Semua User !</DialogHeader>
        <DialogBody>
          <FormInput
            label="title"
            name="Title Notifikasi"
            type="text"
            placeholder="Input title notifikasi"
            value={formNotification.title}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            label="body"
            name="Isi Notifikasi"
            type="text"
            placeholder="Input pesan notifikasi"
            value={formNotification.body}
            onChange={(e) => handleInputChange(e)}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handler} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            {loading ? <Spinner color="blue" /> : "Send"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
