import { Heading, Text, Center, ScrollView, Image } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
        <Center flex={1} padding={"$4"}>
          <Heading>{params.title}</Heading>
          <Image
            source= {{uri: params.image}}
            alt="Image Data"
            size="2xl"
            mt={4}
          />
          <Text fontSize="$sm" color="$light500" mt={4}>
            Date: {params.date}
          </Text>
          <Text mt={4}>{params.content}</Text>
        </Center>
      </ScrollView>
    </>
  );
};

export default NewsDetail;

