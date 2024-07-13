import React from 'react'
import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const ImageGallery = () => {

    const images = [
        {
            src: "/static/bannerDark.png",
            colSpan: 'col-span-3',
            rowSpan: 'row-span-3'
        },
        {
            src: "https://media.licdn.com/dms/image/D4D22AQFjQMBEk2U9Vw/feedshare-shrink_1280/0/1709896335740?e=1723680000&v=beta&t=cceE9fp0_7w9wKvDygZn06xoVM7dB8_kq5Fq3TlK-jo",
            colSpan: 'col-span-2',
            rowSpan: 'row-span-1'
        },
        {
            src: "https://media.licdn.com/dms/image/D5622AQEllXkopXZ8gg/feedshare-shrink_1280/0/1709294152226?e=1723680000&v=beta&t=caS-ogM3ymsPgT74UEkMLp41xLk9E563HogwU9WfJCA",
            colSpan: 'col-span-1',
            rowSpan: 'row-span-2'
        },
        {
            src: "https://media.licdn.com/dms/image/D5622AQGNmjeGWrcLBA/feedshare-shrink_1280/0/1709122487809?e=1723680000&v=beta&t=uGZ0mdinNwLcUBOwCM7DdGcibO14z5YHs5Pjr-j-09o",
            colSpan: 'col-span-1',
            rowSpan: 'row-span-2'
        },
        {
            src: 'https://media.licdn.com/dms/image/D5622AQFu8VYJKwxYkg/feedshare-shrink_2048_1536/0/1709122485151?e=1723680000&v=beta&t=ISkVuBj8ZoQzVjpwzWZP2czdvSKm3EXkfg0f1_gIkKk',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1'
        },

        {
            src: 'https://media.licdn.com/dms/image/D5622AQFcD6TfCOevJA/feedshare-shrink_2048_1536/0/1709122486026?e=1723680000&v=beta&t=uxFtEP9WKr9Sy9v11jKgFZaO1nqhsy1nylk1lPARqSY',
            colSpan: 'col-span-2',
            rowSpan: 'row-span-2'
        },
        {
            src: 'https://media.licdn.com/dms/image/D5622AQFeeOxoE7VlVw/feedshare-shrink_2048_1536/0/1708107158362?e=1723680000&v=beta&t=o4gJX_cdk_3H3J9-p-t_ZxL64C1GiuiYI5YemQyg38M',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1'
        },
        {
            src: 'https://media.licdn.com/dms/image/D5622AQF4VIIMqRcSIw/feedshare-shrink_1280/0/1708107155112?e=1723680000&v=beta&t=LhRFPviiU2VCTzMs3r7TIyY4ufgEdvcOEM5sby8HQtE',
            colSpan: 'col-span-2',
            rowSpan: 'row-span-2'
        },
        {
            src: 'https://media.licdn.com/dms/image/D5622AQEFIApdnHrf6A/feedshare-shrink_2048_1536/0/1709122484903?e=1723680000&v=beta&t=C0ViEUcM8M5Wt33yXWJKKsSn2yglBUTmaxy-biQcbMU',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1'
        },

        {
            src: 'https://media.licdn.com/dms/image/D5622AQGrJANOUFH6aw/feedshare-shrink_1280/0/1708107155281?e=1723680000&v=beta&t=NjlsZy9uym-dRFPAXBvpi4c88NRm-KLV7qDmViiJf6o',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1'
        },

    ];

    return (
        <>
            <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0'>
                <h1 className='text-2xl font-semibold sm:text-4xl md:text-5xl xl:text-6xl text-center py-5 mb-8' id='gallery'>Gallery</h1>
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                        {images.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.colSpan} ${item.rowSpan} relative `}
                            >
                                <PhotoView src={item.src}>
                                    <img
                                        src={item.src}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-bl-lg rounded-br-lg border-t-4 border-double lg:border-t-8 border-t-fuchsia-800 lg:rounded-bl-3xl lg:rounded-br-3xl"
                                    />
                                </PhotoView>
                            </div>
                        ))}
                    </div>
                </PhotoProvider>
            </div>

        </>
    );
}


export default ImageGallery