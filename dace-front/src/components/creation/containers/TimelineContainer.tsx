import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import DtPicker, { Day } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import Compile from "../Compiler";
import Editor from "../timeline/TimelineEditor";
import { useBearby } from '@hicaru/bearby-react';

function TimelineContainer() {
    let [timeSlots, setTimeSlots] = React.useState([{ name: "At creation", open: true }, {name: "Monday 20 December 2023 12:30:00 PM", open: false}]);
    const [date, setDate] = React.useState<Day>(null);
    const { connected, enabled, contract } = useBearby();

    const openTimeSlot = (index: number) => {
        setTimeSlots(timeSlots.map((timeSlot, i) => {
            if (i === index) {
                timeSlot.open = !timeSlot.open;
            }
            return timeSlot;
        }));
    };

    const addNewTimeSlot = () => {
        if (!date) {
            return;
        }
        setTimeSlots([...timeSlots, { name: date.day.toString() + " " + date.month.toString() + " " + date.year.toString(), open: false }]);
    }

    return (
        <div className="border-r-2 border-b-2 h-full overflow-auto">
            {timeSlots.map((timeSlot, index) => {
                return (
                    <div key={index}>
                        <div className="grid grid-cols-12">
                            <div className="col-span-11">{timeSlot.name}</div>
                            <div onClick={() => openTimeSlot(index)}>
                                {timeSlot.open ? <ChevronUpIcon className="h-5" /> : <ChevronDownIcon className="h-5" />}
                            </div>
                        </div>
                        {/**Add divider */}
                        {timeSlot.open && (
                            <div className="h-96">
                                <Editor />
                            </div>
                        )}
                    </div>
                );
            })}
            <div className="flex justify-center">
                <div className="grid grid-cols-2">
                    <div>
                        <DtPicker onChange={setDate} withTime={true} showTimeInput={true} />
                    </div>
                    <button className="bg-red-400 border-2 rounded-full px-4 py-2" onClick={() => addNewTimeSlot()}> Add new timeslot</button>
                    <button className="bg-red-400 border-2 rounded-full px-4 py-2" onClick={async () => {
                        let scData = (await Compile()).binary;
                        if (connected && enabled && scData) {
                            console.log(await contract.deploy({
                                fee: 0,
                                maxGas: 2000000,
                                gasPrice: 0,
                                contractDataBase64: Buffer.from(scData).toString('base64')
                            }));
                        }
                    }}> Mint</button>
                </div>

            </div>
        </div>
    )
}

export default TimelineContainer;