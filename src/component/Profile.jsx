import { Card } from "flowbite-react";
import picture from '../assets/img/Profile.png';

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" class="profile container mt-2 md:mt-5" >
                <div class="flex flex-col-reverse md:flex-row items-center">
                    <div class="w-full md:w-2/3 order-2 md:order-1">
                        <h3 class="font-semibold text-3x1">Hi! aku</h3>
                        <h1 class="font-bold text-3xl nama">Nabillah Novitania</h1>
                        <p>aku adalah manusia</p>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Informasi </option>
                        <option value="">No Hp      :0812345677</option>
                        <option value="">Alamat     :Jl.bumi 24</option>
                        <option value="">Pendidikan :SMK Prakarya Internasional </option>
                        <option value="">Keahlian   :Banyak</option>
                        </select>
                        

                    </div>
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img src={picture} alt="Potrait" class="max-w-full"/>
                    </div>
                </div>
            </section>
        </Card>
    )
}


