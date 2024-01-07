import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const temp =  getTopicById(id);
  const { username, phone, email, emp_id, role, isActive } = temp;

  return <EditTopicForm 
          username={username}  
          phone={phone}
          email={email}
          emp_id={emp_id}
          role={role}
          isActive={isActive}
        />;
}
