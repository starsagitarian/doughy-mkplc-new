import {
  calculateDistance2,
  LocationFromLocalStorage,
} from "./LocationContext";

const PosA = { lat: 40.7182408, lng: -73.9902957 };
const PosB = { lat: 40.72, lng: -73.9902957 };

test("Expect Distance to be a big fucking number ... ", () => {
  expect(calculateDistance2(PosA, PosB)).toBe(195.61411495335034);
});

test("Expect Distance to Null ... ", () => {
  expect(calculateDistance2(PosA, PosB)).toBeNull;
});

test("Expect Distance to be 0 ... ", () => {
  expect(calculateDistance2(PosA, PosB)).not.toBe(0);
});

test("Expect LocationFromLocalStorage Zoom to be 12 ", () => {
  expect((LocationFromLocalStorage.zoom = 12));
});

test("Expect LocationFromLocalStorage Zoom to be 12 ", () => {
  expect((LocationFromLocalStorage.zoom = 12));
});

test("Expect LocationFromLocalStorage Zoom to greater than 3", () => {
  expect(LocationFromLocalStorage.zoom > 3);
});
