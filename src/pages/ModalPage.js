import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  )
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Here is an importnt agreement for you to accept</p>
    </Modal>
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra mi odio, iaculis mollis magna sagittis ac. Curabitur sodales ultrices molestie. In lobortis eget erat in pharetra. Aliquam ac leo id odio efficitur consequat. Phasellus ultricies tortor elementum orci viverra consectetur. Suspendisse quis lectus nec velit porttitor volutpat eget non ipsum. Proin in ligula ac tortor blandit tempus. Nullam blandit interdum purus, nec placerat ex semper eget. Fusce consectetur erat quis augue tincidunt, vitae porttitor ex dignissim. Fusce volutpat dapibus risus. Vivamus lacinia, magna aliquam viverra cursus, sapien ipsum rutrum dolor, non consectetur turpis diam id metus. Nulla sed nunc in magna congue porttitor. Sed posuere vitae justo ut pharetra.
      </p>
      
    </div>
  );
}

export default ModalPage;
