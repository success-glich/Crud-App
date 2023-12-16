import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/app/hooks";
import { deleteUser } from "@/app/userSlice";
import { useToast } from "./ui/use-toast";

function UserDeleteBtn({ id }: { id: string }) {
  // const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
    toast({ title: "User Deleted Successfully!", className: "bg-red-400" });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button variant="destructive"> */}
        <Trash2
          size={20}
          className="text-red-500 hover:scale-125 cursor-pointer transition-all"
        />
        {/* </Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            If this user deleted then you can't recover it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={handleDeleteUser}>
            Yes, delete it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UserDeleteBtn;
