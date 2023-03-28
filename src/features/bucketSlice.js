import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  buckets: [
    {
      id: nanoid(),
      name: "Environment",
      cards: [
        {
          id: nanoid(),
          title: "Nature video",
          link: "https://www.youtube.com/embed/8MoeSio5Las",
        },
      ],
    },
    {
      id: nanoid(),
      name: "School",
      cards: [
        {
          id: nanoid(),
          title: "Kids Rhymes",
          link: "https://www.youtube.com/embed/Oq61TxejZ5g",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Education",
      cards: [
        {
          id: nanoid(),
          title: "Github",
          link: "https://www.youtube.com/embed/PQsJR8ci3J0",
        },
        {
          id: nanoid(),
          title: "React js",
          link: "https://www.youtube.com/embed/Y6aYx_KKM7A",
        },
      ],
    },
    {
      name: "Songs",
      id: nanoid(),
      cards: [
        {
          id: nanoid(),
          title: "Chakde India",
          link: "https://www.youtube.com/embed/bnqLzCsffwY",
        },
      ],
    },
  ],
};

export const bucketSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {
    editBucketName: {
      reducer(state, action) {
        const { editedName, id } = action.payload;
        const foundBucket = state.buckets.find((bucket) => bucket.id === id);
        if (foundBucket) {
          foundBucket.name = editedName;
        }
      },
    },
    deleteBucket: {
      reducer(state, action) {
        const { index } = action.payload;
        state.buckets.splice(index, 1);
      },
    },
    addBucket: {
      reducer(state, action) {
        state.buckets.unshift({
          name: "new bucket",
          id: nanoid(),
          cards: [],
          initialEdit: true,
        });
      },
    },
    addCard: {
      reducer(state, action) {
        const { bucketIndex, title, link } = action.payload;
        const newCard = {
          id: nanoid(),
          title,
          link,
        };

        const foundBucket = state.buckets.find(
          (bucket, index) => index === bucketIndex
        );
        foundBucket.cards.unshift(newCard);
      },
    },
    updateCard: {
      reducer(state, action) {
        const { title, link, bucketIndex, cardIndex } = action.payload;
        const foundBucket = state.buckets.find(
          (bucket, index) => index === bucketIndex
        );
        const foundCard = foundBucket.cards[cardIndex];
        foundCard.title = title;
        foundCard.link = link;
      },
    },
    deleteCard: {
      reducer(state, action) {
        const { bucketIndex, cardIndex } = action.payload;
        console.log(action.payload, "deelele");
        state.buckets[bucketIndex].cards.splice(cardIndex, 1);
      },
    },
    toggleInitialEditValue: {
      reducer(state, action) {
        const { index } = action.payload;
        const val = state.buckets[index].initialEdit;
        if (val !== undefined) {
          state.buckets[index].initialEdit = false;
        }
      },
    },
  },
});

export const allBuckets = (state) => state.buckets.buckets;
export const {
  editBucketName,
  addCard,
  updateCard,
  deleteBucket,
  addBucket,
  deleteCard,
  toggleInitialEditValue,
} = bucketSlice.actions;

export default bucketSlice.reducer;
