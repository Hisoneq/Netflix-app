import { useState } from "react";

export function useModal(){
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content)
        setIsOpen(true)
    };
    const closeModal = () => {
        setIsOpen(false)
        setModalContent(null)
    };

    return { isOpen, openModal, closeModal, modalContent };
}