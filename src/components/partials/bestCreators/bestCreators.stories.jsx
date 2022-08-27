import React from "react";
import BestCreators from "./bestCreators";

export default {
  title: "Partials/BestCreators",
  Component: BestCreators,
  argTypes: {
    content: [{
      "slug": "vitalii",
      "userPic": "https://i.pravatar.cc/150?u=vitalii",
      "id": "246aac98343e9c28f32860533b473086",
      "userName": "Vitalii"
    }, {
      "slug": "test2",
      "userPic": "https://i.pravatar.cc/150?u=test2",
      "id": "4ee1d1038e55a16949777ea305328f92",
      "userName": "test2"
    }, {
      "slug": "buba1425",
      "userPic": "https://i.pravatar.cc/150?u=buba1425",
      "id": "782988deba5963f9481970632829ad1d",
      "userName": "Buba1425"
    }, {
      "slug": "testxxxxsa",
      "userPic": "https://i.pravatar.cc/150?u=testxxxxsa",
      "id": "9acba7b14e8e7a70a6e6c7bb12416323",
      "userName": "testxxxxsa"
    }, {
      "slug": "vitalii_hrozynskyi2",
      "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi2",
      "id": "a1c428089d31ecb1d3d439422986c1f6",
      "userName": "Vitalii Hrozynskyi2"
    }, {
      "slug": "test",
      "userPic": "https://i.pravatar.cc/150?u=test",
      "id": "d40f4474ac02b1b505e46e6246e87f0e",
      "userName": "test"
    }, {
      "slug": "vitalii_hrozynskyi",
      "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
      "id": "ddffcd7b27e8e0ddf48098f48233dbbe",
      "userName": "Vitalii Hrozynskyi"
    }, {
      "slug": "hrozynskyi",
      "userPic": "https://i.pravatar.cc/150?u=hrozynskyi",
      "id": "e1a67d441e27cccbc66200420511f45b",
      "userName": "Hrozynskyi"
    }]
  }
};

function Template(args) {
  return (
    <div style={{ maxWidth: "1340px" }}>
      <BestCreators {...args} />
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
  content: [{
    "slug": "vitalii",
    "userPic": "https://i.pravatar.cc/150?u=vitalii",
    "id": "246aac98343e9c28f32860533b473086",
    "userName": "Vitalii"
  }, {
    "slug": "test2",
    "userPic": "https://i.pravatar.cc/150?u=test2",
    "id": "4ee1d1038e55a16949777ea305328f92",
    "userName": "test2"
  }, {
    "slug": "buba1425",
    "userPic": "https://i.pravatar.cc/150?u=buba1425",
    "id": "782988deba5963f9481970632829ad1d",
    "userName": "Buba1425"
  }, {
    "slug": "testxxxxsa",
    "userPic": "https://i.pravatar.cc/150?u=testxxxxsa",
    "id": "9acba7b14e8e7a70a6e6c7bb12416323",
    "userName": "testxxxxsa"
  }, {
    "slug": "vitalii_hrozynskyi2",
    "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi2",
    "id": "a1c428089d31ecb1d3d439422986c1f6",
    "userName": "Vitalii Hrozynskyi2"
  }, {
    "slug": "test",
    "userPic": "https://i.pravatar.cc/150?u=test",
    "id": "d40f4474ac02b1b505e46e6246e87f0e",
    "userName": "test"
  }, {
    "slug": "vitalii_hrozynskyi",
    "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
    "id": "ddffcd7b27e8e0ddf48098f48233dbbe",
    "userName": "Vitalii Hrozynskyi"
  }, {
    "slug": "hrozynskyi",
    "userPic": "https://i.pravatar.cc/150?u=hrozynskyi",
    "id": "e1a67d441e27cccbc66200420511f45b",
    "userName": "Hrozynskyi"
  }]
};
