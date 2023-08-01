import React, {createRef, useLayoutEffect, useRef, useState} from "react";
import ic_school from "../../assets/svg/ic_school.svg";
import ic_mobile from "../../assets/svg/ic_mobile.svg";
import ic_desktop from "../../assets/svg/ic_dekstop.svg";

type TimelineItem = {
    title: string,
    descriptions: string,
    date_start: Date,
    date_end: Date,
    icon: string,
    currently?: boolean,
}

export default function Timeline(): React.ReactElement {
    const timelineItem: TimelineItem[] = [
        {
            title: 'Mobile Developer (Flutter) at PT. Ada Ide Langsung Jalan',
            descriptions: 'Fixed bugs that appeared in the application, doing development and testing of applications that are being developed, integrate applications with REST APIs, handle Oracle and PostgreSQL databases, create and develop application UI design (Figma)',
            date_start: new Date(2021, 11),
            date_end: new Date(),
            icon: ic_mobile,
            currently: true,
        },
        {
            title: 'Universitas Pelita Bangsa',
            descriptions: 'Teknik Informatika (GPA : 3.39)',
            date_start: new Date(2017, 8),
            date_end: new Date(2021, 11),
            icon: ic_school,
        },
        {
            title: 'PT Elinklinger Indonesia',
            descriptions: 'Perform product quality checks on the production line.',
            date_start: new Date(2020, 1),
            date_end: new Date(2021, 1),
            icon: ic_desktop,
        },
        {
            title: 'PT Mitoku Rubber Indonesia',
            descriptions: 'Perform product quality checks on the production line.',
            date_start: new Date(2017, 3),
            date_end: new Date(2019, 3),
            icon: ic_desktop,
        },
        {
            title: 'PT Tirta Alam Segar (Ale-Ale)',
            descriptions: 'Carry out the process of packing finish good products according to standard operating procedures',
            date_start: new Date(2016, 2),
            date_end: new Date(2017, 2),
            icon: ic_desktop,
        }
    ];

    return (
        <>
            <section id="timeline" className='mt-16 px-8 md:px-20 py-4 lg:px-24 '>
                <div className='flex flex-row justify-center'>
                    <div className='font-bold text-2xl text-595260'>Timeline</div>
                </div>
                <div className='m-1 sm:m-2 md:m-3'/>
                <div className="min-h-min flex flex-col justify-center">
                    {/*<div className="sm:max-w-xl sm:mx-auto w-full">*/}
                    <div className="w-full">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                            {
                                timelineItem.map((item, index): React.ReactElement => (
                                        <Card data={item} key={index} index={index}
                                              is_last={(timelineItem.length - 1) == index}/>
                                    )
                                )
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

type CardProps = {
    data: TimelineItem,
    index: number,
    is_last: boolean,
}

function Card(props: CardProps): React.ReactElement {
    const ref: React.RefObject<any> = createRef()
    const dimensions = useRefDimensions(ref)
    const height = dimensions.height + 48

    const Line = () => {
        if (props.is_last) return (<></>);
        const css: string = 'hidden sm:block w-1 bg-2C2E43 absolute left-1/2 transform -translate-x-1/2';
        return (<div style={{height: height}} className={css}/>);
    }


    if (props.index % 2 === 0) {
        return (
            <div ref={ref} className="mt-6 sm:mt-0 sm:mb-12">
                <div className="hidden sm:block absolute bg-2C2E43 w-1/2 h-1">
                    <div className="flex justify-end me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14" viewBox="0 0 105 41"
                             fill="none">
                            <path d="M104.5 0H0V5H21.5L104.5 40.5V0Z" fill="#2C2E43"/>
                        </svg>
                    </div>
                </div>
                <Line/>
                <div className="flex flex-col sm:flex-row items-start">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-12">
                            <div className="p-4 bg-5952601A rounded shadow">
                                <p
                                    className="font-light text-2C2E43 text-xs">{format(props.data.date_start)} - {props.data.currently ? 'Now' : format(props.data.date_end)}</p>
                                <div
                                    className="mt-2 font-bold text-2C2E43">{props.data.title}</div>
                                <p className="mt-1 font-light">{props.data.descriptions}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-full bg-2C2E43 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img className='w-4 h-4' src={props.data.icon} alt={props.data.title}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div ref={ref} className="mt-6 sm:mt-0 sm:mb-12">
                <div className="hidden sm:block absolute right-0 bg-2C2E43 w-1/2 h-1">
                    <div className="flex justify-start ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14" viewBox="0 0 105 41"
                             fill="none">
                            <path d="M0.5 0H105V5H83.5L0.5 40.5V0Z" fill="#2C2E43"/>
                        </svg>
                    </div>
                </div>
                <Line/>
                <div className="flex flex-col sm:flex-row items-start">
                    <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-12">
                            <div className="p-4 bg-5952601A rounded shadow">
                                <p
                                    className="font-light text-2C2E43 text-xs">{format(props.data.date_start)} - {format(props.data.date_end)}</p>
                                <div
                                    className="mt-2 font-bold text-2C2E43">{props.data.title}</div>
                                <p className="mt-1 font-light">{props.data.descriptions}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-full bg-2C2E43 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img className='w-4 h-4' src={props.data.icon} alt={props.data.title}/>
                    </div>
                </div>
            </div>
        )
    }
}


const useRefDimensions = (ref: React.RefObject<any>) => {
    const [dimensions, setDimensions] = useState({width: 1, height: 2})
    React.useEffect((): void => {
        if (ref.current) {
            const {current} = ref
            const boundingRect = current.getBoundingClientRect()
            const {width, height} = boundingRect
            setDimensions({width: Math.round(width), height: Math.round(height)})
        }
    }, [])
    return dimensions
}

function format(date: Date) {
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', {month: 'short'});

    return `${year} ${month}`;
}
