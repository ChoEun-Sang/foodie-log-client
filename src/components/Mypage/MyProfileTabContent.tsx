import * as Tabs from "@radix-ui/react-tabs";
import MyMap from "@components/Mypage/MyMap";
import MyFeedThumbnail from "@components/Mypage/MyFeedThumbnail";

interface MyFeedTabProps {
  userId: number;
}

function MyProfileTabContent({ userId }: MyFeedTabProps) {
  const tabTriggerStyles =
    "w-full py-2.5 bg-white flex items-center justify-center text-base text-semibold leading-none text-gray-4 select-none hover:text-red data-[state=active]:text-red data-[state=active]:border-b-2 data-[state=active]:border-red outline-none cursor-default";

  return (
    <Tabs.Root defaultValue="feed">
      <Tabs.List className="w-full flex">
        <Tabs.Trigger className={tabTriggerStyles} value="feed">
          피드
        </Tabs.Trigger>
        <Tabs.Trigger className={tabTriggerStyles} value="map">
          지도
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="mt-1" value="feed">
        <MyFeedThumbnail userId={userId} />
      </Tabs.Content>
      <Tabs.Content className="mt-1" value="map">
        <MyMap userId={userId} />
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default MyProfileTabContent;
