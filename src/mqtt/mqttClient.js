import mqtt from "mqtt";
import Operation from "../models/Operation.js";
import Detection from "../models/Detection.js";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("MQTT connected");

  client.subscribe("vision/operation");
  client.subscribe("vision/detection");
});

client.on("message", async (topic, message) => {
  console.log("MQTT message received:", topic, message.toString());
  try {
    const data = JSON.parse(message.toString());

    if (topic === "vision/operation") {
      const op = await Operation.create(data);
      console.log("operation saved:", op._id);
    }

    if (topic === "vision/detection") {
      await Detection.create(data);
      console.log("detection saved");
    }
  } catch (err) {
    console.error("MQTT parse error", err);
  }
});
