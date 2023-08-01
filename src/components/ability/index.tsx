import React from "react";
import ic_android from "../../assets/svg/ic_android.svg";
import ic_front_end from "../../assets/svg/ic_front_end.svg";
import ic_back_end from "../../assets/svg/ic_back_end.svg";

type AbilityItem = {
    title: string,
    description: string,
    tools: string[],
    ic: string,
}

export default function Ability(): React.ReactElement {
    const abilityItems: AbilityItem[] = [
        {
            ic: ic_android,
            title: 'Android Skill',
            description: 'While developing android application. i\'m able to use some library Flutter',
            tools: ['Flutter', 'Dart','Android Studio']
        },
        {
            ic: ic_back_end,
            title: 'Back-end Skill',
            description: 'At developing android system Rest API',
            tools: ['postgreeSQL', 'PHP']
        }
    ];

    return (
        <>
            <section id="ability" className='mt-16 px-8 md:px-20 lg:px-24 py-4 gap-4'>
                <div className='md:flex flex-row justify-between'>
                    {abilityItems.map((item, index) => {
                            const tools: string = item.tools.join(', ');

                            return (
                                <div key={index} className='w-full md:w-1/3 p-5 border-1'>
                                    <div className='flex flex-row justify-center'>
                                        <img src={item.ic} alt={item.title} className='w-1/4'/>
                                    </div>
                                    <div className='mt-2 font-bold text-xl text-595260 text-center'>{item.title}</div>
                                    <div
                                        className='mt-2 font-light  text-2C2E43 text-center'>{item.description}</div>
                                    <div className='mt-2 font-bold text-595260 text-center'>Dev Tools</div>
                                    <div className='mt-2 font-light  text-2C2E43 flex text-center'>{tools}</div>
                                </div>
                            )
                        }
                    )}
                </div>
            </section>
        </>
    );
}