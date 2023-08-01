import React from "react";

type PersonalItem = {
    title: string,
    descriptions: string[],
}

export default function Personal(): React.ReactElement {
    const personalItem: PersonalItem = {
        title: 'Hello, my name is Wiwin Winarti',
        descriptions: [
            'I am born in Ciamis, \'96. I live on Grand Permata Residence, Tambun Utara, Bekasi Utara. My nationality is Indonesian, and my religion is Islam.I have graduated from Universitas Pelita Bangsa Bekasi majoring in Computer Science.',
            'I code using dart, for design architecture i could use Figma, Because of restructuring, since November \'21 i work as Mobile Developer (Flutter) at my current company , I always keep abreast of developing technologies.'
        ],
    };
    return (
        <>
            <section id="personal" className='mt-16 px-8 md:px-20 lg:px-24 py-4 gap-4'>
                <div className='text-center'>
                    <div className='mt-2 font-semibold text-4xl text-595260'>{personalItem.title}</div>
                    {personalItem.descriptions.map((item, index) => (
                            <div key={index} className='mt-4 font-light text-2C2E43'>{item}</div>
                        )
                    )}
                </div>
            </section>
        </>
    );
}