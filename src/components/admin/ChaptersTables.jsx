import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getClassById } from "../../services/get-all-class";
import { useParams } from "react-router-dom";
import { EditChapters } from "../EditChapters";
import FormInput from "../form/FormInput";
import { editChaptersById } from "../../services/edit-chapters";
import { deleteChaptersById } from "../../services/delete-chapters";
import { toast } from "react-toastify";
import {
  deleteVideosById,
  editVideosById,
} from "../../services/videos-chapter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const ChaptersTables = () => {
  const [dataChapters, setDataChapters] = useState([]);
  const [editChaptersId, setEditChaptersId] = useState(null);
  const [editVideosId, setEditVideosId] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editVideo, setEditVideo] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState(null);
  const [hapus, setHapus] = useState(false);
  const [hapusVideo, setHapusVideo] = useState(false);
  const [editDataVideo, setEditDataVideo] = useState({
    title: "",
    link: "",
    time: "",
  });
  const [editChapters, setEditChapters] = useState({
    no_chapter: "",
    title: "",
    videos: [
      {
        no_video: "",
        titleVideo: "",
        link: "",
        time: "",
      },
    ],
  });

  // *EDIT Video
  const handleEditVideo = (id, row) => {
    setEditVideosId(id);
    setSelectedVideos(row);
    setEditVideo(true);
    setEditDataVideo({
      title: row.title,
      link: row.link,
      time: row.time,
    });
  };
  const editVideoClose = () => {
    setEditVideo(false);
    setSelectedVideos(null);
    setEditDataVideo({
      title: "",
      link: "",
      time: "",
    });
  };

  const handleInputChangeVideo = (e) => {
    const { id, value } = e.target;
    setEditDataVideo({ ...editDataVideo, [id]: value });
  };
  const handleInputParseIntChangeVideo = (e) => {
    const { id, value } = e.target;
    setEditDataVideo({ ...editDataVideo, [id]: parseInt(value, 10) });
  };
  const handleEditSubmitVideo = async () => {
    const editSubmit = {
      title: editDataVideo.title,
      link: editDataVideo.link,
      time: editDataVideo.time,
    };
    try {
      const response = await editVideosById(editVideosId, editSubmit);
      setEditVideo(false);
      toast.success("Kelas berhasil di perbarui");
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }

    console.log(editSubmit);
  };
  const handleHapusVideo = (row) => {
    setSelectedVideos(row);
    setHapusVideo(true);
  };
  const handleDeleteVideoSubmit = async () => {
    try {
      await deleteVideosById(selectedVideos);
      setHapusVideo(false);
      toast.success("kelas Berhasil dihapus");
      getClasById();
    } catch (error) {
      console.error(error);
    }
  };
  // *EDIT Video

  // ! UNTUK EDIT
  // *Untuk Input chapter
  const handleInputParseIntChange = (e) => {
    const { id, value } = e.target;
    setEditChapters({ ...editChapters, [id]: parseInt(value, 10) });
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditChapters({ ...editChapters, [id]: value });
  };
  //*Untuk Input video chapter
  const handleVideoChange = (e, index, field) => {
    const { value } = e.target;
    const updatedVideos = [...editChapters.videos];

    if (field === "time" || field === "no_video") {
      updatedVideos[index][field] = parseInt(value, 10) || 0;
    } else {
      updatedVideos[index][field] = value;
    }
    setEditChapters({ ...editChapters, videos: updatedVideos });
    console.log(editChapters, e.target.value);
  };
  // *Untuk add video chapter
  const addVideo = () => {
    setEditChapters({
      ...editChapters,
      videos: [
        ...editChapters.videos,
        { no_video: "", title: "", link: "", time: "" },
      ],
    });
  };
  //*Untuk remove video chapters
  const handleRemoveVideo = (index) => {
    const updatedVideos = [...editChapters.videos];
    updatedVideos.splice(index, 1);
    setEditChapters({ ...editChapters, videos: updatedVideos });
  };

  const handleEdit = (id, card) => {
    setEditChaptersId(id);
    setEdit(true);
    setSelectedChapters(card);
    setEditChapters({
      no_chapter: card.no_chapter,
      title: card.title,
      videos: [
        {
          no_video: "",
          titleVideo: "",
          link: "",
          time: "",
        },
      ],
    });
  };

  const EditChaptersClose = () => {
    setEdit(false);
    setSelectedChapters(null);
    setEditChapters({
      no_chapter: "",
      title: "",
      videos: [
        {
          no_video: "",
          titleVideo: "",
          link: "",
          time: "",
        },
      ],
    });
  };
  const handleHapus = (card) => {
    setSelectedChapters(card);
    setHapus(true);
  };
  const handleSubmit = async () => {
    let dataEditSubmit;

    if (
      editChapters.videos.some((video) =>
        Object.values(video).some((value) => value !== "")
      )
    ) {
      dataEditSubmit = {
        no_chapter: editChapters.no_chapter,
        title: editChapters.title,
        videos: editChapters.videos.map((video) => ({
          no_video: video.no_video,
          title: video.titleVideo,
          link: video.link,
          time: video.time,
        })),
      };
    } else {
      dataEditSubmit = {
        no_chapter: editChapters.no_chapter,
        title: editChapters.title,
      };
    }
    try {
      const response = await editChaptersById(editChaptersId, dataEditSubmit);
      toast.success("Chapters Berhasil diperbarui");
      setEdit(false);
      return response;
    } catch (error) {
      setEdit(false);
      toast.error("Chapters gagal diperbarui");
      console.error(error);
    }
  };
  const handleDeleteChapterSubmit = async () => {
    try {
      await deleteChaptersById(selectedChapters.id);
      setHapus(false);
      toast.success("Chapter Berhasil dihapus");
      getClasById();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(editChapters, "dari chaptersTable.jsx");
  console.log(editDataVideo, "dari editvideo.jsx");

  // ! UNTUK EDIT
  // *UNTUK GET
  const TABLE_HEAD_VIDEO = [
    "Nomor Video",
    "Title Video",
    "Link",
    "Durasi",
    "Aksi",
  ];
  const { id } = useParams();

  const getClasById = async () => {
    try {
      const response = await getClassById(id);
      setDataChapters(response.data.data.chapters);
      console.log(response.data.data.chapters, "dari chaptersTable");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClasById();
  }, []);
  // *UNTUK GET
  return (
    <div className="">
      {/* //! EDIT Video */}
      <Dialog open={editVideo} handler={editVideoClose} className=" h-[70%]">
        <DialogHeader>Edit Video</DialogHeader>
        <DialogBody>
          <FormInput
            label="title"
            type="text"
            placeholder="Judul Video"
            name="Title Video"
            value={editDataVideo.title}
            onChange={(e) => handleInputChangeVideo(e)}
          />
          <FormInput
            label="link"
            type="text"
            placeholder="Link Video"
            name="Link Video"
            value={editDataVideo.link}
            onChange={(e) => handleInputChangeVideo(e)}
          />
          <FormInput
            label="time"
            type="text"
            placeholder="Durasi Video"
            name="Durasi Video"
            value={editDataVideo.time}
            onChange={(e) => handleInputParseIntChangeVideo(e)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            className="mr-1"
            onClick={editVideoClose}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleEditSubmitVideo}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //! EDIT Video */}
      {/* //! Hapus Video */}
      <Dialog open={hapusVideo} handler={() => setHapusVideo(false)}>
        <DialogHeader>Anda yakin ingin mengapus video ini ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setHapusVideo(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleDeleteVideoSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //! Hapus Video */}
      {/* //!Edit Chapter */}
      <Dialog
        open={edit}
        handler={EditChaptersClose}
        className="overflow-y-scroll h-4/5"
      >
        <DialogHeader>Edit Chapter.</DialogHeader>
        <DialogBody>
          <FormInput
            label="no_chapter"
            type="number"
            placeholder="No Chapter"
            name="No Chapter"
            value={editChapters.no_chapter}
            onChange={(e) => handleInputParseIntChange(e)}
          />
          <FormInput
            label="title"
            type="text"
            placeholder="Input Title Chapter"
            name="Title Chapter"
            value={editChapters.title}
            onChange={(e) => handleInputChange(e)}
          />
          {editChapters.videos.map((videos, index) => (
            <div key={index}>
              <Card className="h-[30rem] bg-red-200 my-4">
                <div className="flex flex-row flex-wrap justify-between items-center">
                  <h1 className="before:content-['*'] before:px-2 before:text-red-600 italic">
                    Hapus jika tidak ingin menambah video di dalam chapters
                  </h1>
                  <button
                    className="px-2 my-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                    onClick={() => handleRemoveVideo(index)}
                  >
                    Hapus
                  </button>
                </div>
                <div className="p-4">
                  <FormInput
                    type="text"
                    label="no_video"
                    name="Nomor Video"
                    value={videos.no_video}
                    placeholder="Input No Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "no_video")}
                  />
                  <FormInput
                    type="text"
                    label="titleVideo"
                    name="Title Video"
                    value={videos.titleVideo}
                    placeholder="Input Title Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "titleVideo")}
                  />
                  <FormInput
                    type="text"
                    label="link"
                    name="Link Video"
                    value={videos.link}
                    placeholder="Input Link Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "link")}
                  />
                  <FormInput
                    type="text"
                    label="link"
                    name="Durasi Video"
                    value={videos.time}
                    placeholder="Input No Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "time")}
                  />
                </div>
              </Card>
            </div>
          ))}
          <Button className="w-full my-3" onClick={addVideo}>
            Tambah Video
          </Button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            className="mr-1"
            onClick={() => setEdit(false)}
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //!Edit Chapter */}
      {/* //!Untuk Hapus */}
      <Dialog open={hapus} handler={() => setHapus(false)}>
        <DialogHeader>Anda yakin ingin mengapus chapter ini ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setHapus(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleDeleteChapterSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //!Untuk Hapus */}
      <h1 className="text-center font-extrabold text-3xl py-4">
        Data Chapters
      </h1>
      <a href="/admin/kelola-kelas" className="pl-5">
        <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
      </a>
      <div className="flex flex-col gap-4 container sm:container md:container lg:container xl:container justify-center">
        {dataChapters?.map((chapters, index) => {
          return (
            <div key={index}>
              <Card className="w-[88vw] mobile:w-[80vw] laptop:w-[80vw] laptop:h-[30rem] bg-blue-gray-700 my-4 overflow-x-scroll ">
                <CardBody>
                  <div className="text-white ">
                    <tr>
                      <td className="after:content-[''] after:px-4">
                        Nomor Chapter
                      </td>
                      <td>:</td>
                      <td className="before:content-[''] before:px-1">
                        {chapters.no_chapter}
                      </td>
                    </tr>
                    <tr>
                      <td className="after:content-[''] after:px-4">
                        Title Chapter
                      </td>
                      <td>:</td>
                      <td className="before:content-[''] before:px-1">
                        {chapters.title}
                      </td>
                    </tr>
                    <tr>
                      <td className="after:content-[''] after:px-4">
                        Jumlah Video
                      </td>
                      <td>:</td>
                      <td className="before:content-[''] before:px-1">
                        {chapters.videos.length}
                      </td>
                    </tr>
                    <div className="flex flex-row gap-2 justify-between items-center my-2">
                      <h1 className="text-lg font-semibold">
                        List Video Chapter
                      </h1>
                      <div className="flex gap-2">
                        <Button
                          color="green"
                          onClick={() => handleEdit(chapters.id, chapters)}
                        >
                          Ubah
                        </Button>
                        <Button
                          color="red"
                          onClick={() => handleHapus(chapters)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <Card className="h-[15rem] w-[90%] overflow-scroll mx-auto">
                  <table className="w-full container mx-auto min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD_VIDEO.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {chapters.videos.map((videos, index) => {
                        return (
                          <tr key={index}>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.no_video}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.title}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.link}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50 after:content-['Menit'] after:ml-1">
                              {videos.time}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div className="flex gap-2">
                                <Button
                                  onClick={() =>
                                    handleEditVideo(videos.id, videos)
                                  }
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => handleHapusVideo(videos.id)}
                                  color="red"
                                >
                                  Hapus
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
