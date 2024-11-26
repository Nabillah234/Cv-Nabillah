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
                        <p>Aku adalah seorang Programmer</p>
                         </div>
                         
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img  src={picture} alt="Potrait" class="max-w-full rounded-full"/>
                    </div>
                </div>
            </section>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TENTANG SAYA</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Saya adalah seorang pelajar yang sedang belajar coding </p>
                </a>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PENDIDIKAN</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">SMK Prakarya Internasional 2023/2026 Jurusan PPLG </p>
                </a>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HOBI</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Membaca buku dan Mendegarkan musik</p>
                </a>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KONTAK</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">&#128383; +62 812-2122-7470</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">&#128232; nabillahnovitania@gmail.com</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">&#128205; Jl.Raya Kopo No.305 BOJONGLOA KIDUL, KOTA BANDUNG</p>
                </a>
                
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KEMAMPUAN</h5>

<div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
               Ui/Ux 
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>
                Editor
            </a>
        </li>
        </ul>
        </div>
        
        
        
</Card>
    

    )
}


