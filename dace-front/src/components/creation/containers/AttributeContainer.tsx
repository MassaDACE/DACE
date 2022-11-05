import React from "react";
import { ExclamationTriangleIcon, PencilSquareIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from '@headlessui/react'

enum Type {
    Number = "Number",
    Address = "Address",
    Image = "Image",
    Text = "Text",
}

enum StateModal {
    Create = "Create",
    Edit = "Edit"
}

function AttributeContainer() {
    const [open, setOpen] = React.useState(false);
    const [idModal, setIdModal] = React.useState<number | null>(null);
    const [stateModal, setStateModal] = React.useState(StateModal.Create);
    const createButtonRef = React.useRef(null);
    const [attribute, setAttribute] = React.useState({ name: "", type: Type.Text, value: "" });
    const [attributes, setAttributes] = React.useState([{ name: "Picture", type: Type.Image, value: "testlolololefouvhriuhrviuhrviurvhiurvhiruhriuvhr" }]);

    const changeTempName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAttribute({ ...attribute, name: e.target.value });
    };

    const changeTempType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAttribute({ ...attribute, type: e.target.value as Type });
    };

    const changeTempValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAttribute({ ...attribute, value: e.target.value });
    };

    const addAttribute = () => {
        setAttributes([...attributes, attribute]);
        setAttribute({ name: "", type: Type.Text, value: "" });
        setOpen(false);
    }

    const editAttribute = (index: number) => {
        setAttributes(attributes.map((attributeElem, i) => {
            if (i === index) {
                attributeElem.name = attribute.name;
                attributeElem.type = attribute.type;
                attributeElem.value = attribute.value;
            }
            return attributeElem;
        }));
        setAttribute({ name: "", type: Type.Text, value: "" });
        setOpen(false);
    }


    const removeAttribute = (index: number) => {
        setAttributes(attributes.filter((_, i) => i !== index));
    };

    return (
        <div className="flex border-r-2 border-b-2 h-full overflow-auto">

            <Transition.Root show={open} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={createButtonRef} onClose={() => {setAttribute({ name: "", type: Type.Text, value: "" }); setOpen(false);}}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="flex justify-center pb-8 pt-4">
                                        Create your attribute
                                    </div>
                                    <div className="flex py-4">
                                        <div className="px-4">
                                            Name:
                                        </div>
                                        <div>
                                            <input className="border-2 rounded" value={attribute.name} onChange={(e) => changeTempName(e)} type="text" />
                                        </div>
                                    </div>
                                    <div className="flex py-4">
                                        <div className="px-4">
                                            Type:
                                        </div>
                                        <select onChange={(e) => changeTempType(e)}>
                                            {
                                            Object.keys(Type).map(key => (
                                                <option
                                                    aria-selected="true"
                                                    key={Type[key]}
                                                    value={Type[key]}
                                                >
                                                    {Type[key]}
                                                </option>
                                                )
                                            )
                                            }
                                        </select>
                                    </div>
                                    <div className="flex py-4">
                                        <div className="px-4">
                                            Default value:
                                        </div>
                                        <div>
                                            <input className="border-2 rounded" value={attribute.value} onChange={(e) => changeTempValue(e)} type="text" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        { stateModal == StateModal.Create ? <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => addAttribute()}
                                            ref={createButtonRef}
                                        >
                                            Create Attribute
                                        </button> : <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => editAttribute(idModal!)}
                                            ref={createButtonRef}
                                        >
                                            Edit Attribute
                                        </button> }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="w-full mx-4">
                <div key={"menu"} className="flex justify-between">
                    <div>
                        Name
                    </div>
                    <div>
                        Default value
                    </div>
                    <div>
                    </div>
                </div>
                {attributes.map((attribute, index) => (
                    <div key={index} className="flex justify-between">
                        <div>
                            {attribute.name}
                        </div>
                        <div>
                            {attribute.value.length > 20 ? attribute.value.substring(0, 20) + "..." : attribute.value}
                        </div>
                        <div className="flex">
                            <PencilSquareIcon className="w-4" onClick={() => { setAttribute({name: attribute.name, value: attribute.value, type: attribute.type}); setStateModal(StateModal.Edit); setIdModal(index); setOpen(true); }} />
                            <XMarkIcon className="w-4" onClick={() => removeAttribute(index)} />
                        </div>
                    </div>
                ))}
                <div className="flex justify-center">
                    <button className="bg-red-400 border-2 rounded-full px-4 py-2" onClick={() => {setStateModal(StateModal.Create); setOpen(true);}}> Add new attribute</button>
                </div>
            </div>
        </div>
    )
}

export default AttributeContainer;