jest.mock("../misc/somethingWrong")
const { add } = require("../misc/add")
test("wx", () => {
    expect(wx.getSystemInfoSync()).toEqual({
        windowWidth: 700,
    })
    expect(add(1,2)).toBe(3);
})