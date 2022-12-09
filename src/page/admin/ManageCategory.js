import React, { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";

function ManageCategory() {
  const [editJenisModalStatus, setEditJenisModalStatus] = useState({
    status: false,
    name: "",
    category: "",
  });
  const [editKategoriModalStatus, setEditKategoriModalStatus] = useState({
    status: false,
    name: "",
  });
  const [tambahJenisModalStatus, setTambahJenisModalStatus] = useState(false);
  const [tambahKategoriModalStatus, setTambahKategoriModalStatus] =
    useState(false);

  let kategori = [
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
  ];
  let jenis = [
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
  ];

  let editJenisModal = "";
  let editKategoriModal = "";
  let tambahJenisModal = "";
  let tambahKategoriModal = "";
  if (editJenisModalStatus.status) {
    editJenisModal = (
      <div
        tabindex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setEditJenisModalStatus({
                  status: false,
                  name: "",
                  category: "",
                })
              }
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Edit Jenis
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    for="nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Jenis
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={editJenisModalStatus.name}
                    required
                  />
                </div>
                <div>
                  <label
                    for="kategori"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kategori
                  </label>
                  <input
                    type="text"
                    name="kategori"
                    id="kategori"
                    placeholder={editJenisModalStatus.category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (editKategoriModalStatus.status) {
    editKategoriModal = (
      <div
        tabindex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setEditKategoriModalStatus({ status: false, name: "" })
              }
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Edit Kategori
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    for="nama-kategori"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Kategori
                  </label>
                  <input
                    type="text"
                    name="nama-kategori"
                    id="nama-kategori"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={editKategoriModalStatus.name}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tambahJenisModalStatus) {
    tambahJenisModal = (
      <div
        tabindex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() => setTambahJenisModalStatus(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Tambah Jenis
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    for="nama-tambah-jenis"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Jenis
                  </label>
                  <input
                    type="text"
                    name="nama-tambah-jenis"
                    id="nama-tambah-jenis"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apa kek terserah"
                    required
                  />
                </div>
                <div>
                  <label
                    for="kategori-tambah-jenis"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kategori
                  </label>
                  <input
                    type="text"
                    name="kategori-tambah-jenis"
                    id="kategori-tambah-jenis"
                    placeholder="yang ada aja"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tambahKategoriModalStatus) {
    tambahKategoriModal = (
      <div
        tabindex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() => setTambahKategoriModalStatus(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Tambah Kategori
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    for="nama-tambah-kategori"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Kategori
                  </label>
                  <input
                    type="text"
                    name="nama-tambah-kategori"
                    id="nama-tambah-kategori"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apakek yang keren"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row">
      <AdminSidebar />
      <div className="w-full ml-64 ">
        {editJenisModal}
        {editKategoriModal}
        {tambahJenisModal}
        {tambahKategoriModal}
        <div className="m-3 flex">
          <a
            href="/administration-product"
            class="text-black hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-1 text-center mr-2 my-auto "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m43.932 74.467c-.295 0-.59-.087-.844-.26l-33.755-22.967c-.41-.279-.656-.743-.656-1.24s.246-.961.656-1.24l33.755-22.967c.459-.313 1.054-.346 1.545-.085.491.26.798.77.798 1.326v16.232h44.391c.829 0 1.5.671 1.5 1.5v10.469c0 .829-.671 1.5-1.5 1.5h-44.39v16.232c0 .556-.307 1.066-.798 1.326-.22.116-.462.174-.702.174zm-31.088-24.467 29.588 20.132v-14.898c0-.829.671-1.5 1.5-1.5h44.391v-7.469h-44.391c-.829 0-1.5-.671-1.5-1.5v-14.897z" />
              </g>
            </svg>
          </a>

          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Category Manager
          </h5>
        </div>
        <div className="xl:flex flex-row m-3">
          <div className="mx-auto">
            <div className="flex mb-1">
              <h5 className="flex-auto text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                Jenis
              </h5>
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  onClick={() => setTambahJenisModalStatus(true)}
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Tambah Jenis
                </a>
              </div>
            </div>
            <div class=" h-fit  relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="xl:w-[38vw] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      No.
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Nama
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Category
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Jumlah Barang
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jenis.map((jen, i) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td class="py-4 px-6">{jen.nama}</td>
                        <td class="py-4 px-6">{jen.kategori}</td>
                        <td class="py-4 px-6">{jen.jumlah_barang}</td>
                        <td class="py-4 px-6 text-right">
                          <a
                            href="#"
                            onClick={() =>
                              setEditJenisModalStatus({
                                status: true,
                                name: jen.nama,
                                category: jen.kategori,
                              })
                            }
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" mx-auto">
            <div className="flex mb-1">
              <h5 className="flex-auto text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                Kategori
              </h5>
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  onClick={() => setTambahKategoriModalStatus(true)}
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Tambah Kategori
                </a>
              </div>
            </div>
            <div class=" h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="xl:w-[38vw] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="py-3 px-6">
                      No.
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Nama
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Jumlah Jenis
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Jumlah Barang
                    </th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kategori.map((kat, i) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td class="py-4 px-6">{kat.nama}</td>
                        <td class="py-4 px-6">{kat.jumlah_jenis}</td>
                        <td class="py-4 px-6">{kat.jumlah_barang}</td>
                        <td class="py-4 px-6 text-right">
                          <a
                            href="#"
                            onClick={() =>
                              setEditKategoriModalStatus({
                                status: true,
                                name: kat.nama,
                              })
                            }
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCategory;
