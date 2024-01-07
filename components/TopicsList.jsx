import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';


// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
// ];




const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    };
    // console.log("res: ", res); 
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

// const topicsWithKey = topics.map((topic, index) => ({ key: index, ...topic }));

export default async function TopicsList() {
  // 'use server'
  const { topics } = await getTopics();
  const topicsWithKey = topics.map((topic, index) => ({ key: index, ...topic }));
  // console.log("topicswithKEt", topicsWithKey);
  // topicsWithKey.map((t) => {
  //   console.log("t: ", t.username)
  // });

  async function MyComponent(isActive) {
    // "use server"
    const renderIsActive = (() => (
      <>
        {isActive ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        )}
      </>
    ));
    return renderIsActive;
  }
  
  const columns = [
    {
      title: '_id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
      sorter: (a,b) => a.username > b.username,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a,b) => a.phone > b.phone,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a,b) => a.email > b.email,
    },
    {
      title: 'emp_id',
      dataIndex: 'emp_id',
      key: 'emp_id',
      sorter: (a,b) => a.emp_id > b.emp_id,
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a,b) => a.role > b.role,
    },
    {
      title: 'isActive',
      dataIndex: 'isActive',
      key: 'isActive',
      // render: (isActive) => MyComponent(isActive),
      render: (isActive) => {
        const RenderIsActive = () => (
          <>
            {isActive ? (
              <Tag color="green">Active</Tag>
            ) : (
              <Tag color="red">Inactive</Tag>
            )}
          </>
        );
        return <RenderIsActive />;
      },
    },
    {
      title: 'delete',
      key: 'delete',
      render: (text, record) => (
        <Space size="middle">
          <RemoveBtn id={record._id} />
        </Space>
      ),
    },
    {
      title: 'edit',
      key: 'edit',
      render: (text, record) => (
        <Space size="middle">
          <Link href={`/editTopic/${record._id}`}>
            {/* <Link href= {{pathname: `/editTopic/${record._id}`}}> */}
            <HiPencilAlt size={24} />
          </Link>
        </Space>
      ),
    }
    ];

  return (
    <>
    
      {/* {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.username}</h2>
            <p className="text-lg">{t.phone}</p>
            <p className="text-lg">{t.email}</p>
            <p className="text-lg">{t.emp_id}</p>
            <p className="text-lg">{t.role}</p>
            <p className="text-lg">{t.isActive ? "Active" : "Inactive"}</p>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))} */}

      {/* <Table columns={columns} dataSource={topics} /> */}
      <Table columns={columns} dataSource={topicsWithKey} />

    </>
  );
}
