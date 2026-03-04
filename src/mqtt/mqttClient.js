import mqtt from "mqtt";
import Operation from "../models/Operation.js";
import Detection from "../models/Detection.js";
import User from "../models/User.js";
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("MQTT connected");

  client.subscribe("vision/operation");
  client.subscribe("vision/depth");
  client.subscribe("vision/operation/start");
  client.subscribe("vision/operation/end");
  // User.find().then(users => {
  //   users.forEach(user => {
  //     client.subscribe(`vision/operation/ack/${user._id}`);
  //   });
  // });
});

client.on("message", async (topic, message) => {
  console.log("MQTT message received:", topic, message.toString());
  try {
    const data = JSON.parse(message.toString());

    if (topic === "vision/operation/start") {
      const op = await Operation.create(data);
      console.log("operation start saved:", op._id);
      client.publish(`vision/operation/ack/${op.userId}`, JSON.stringify({ operationId: op._id }));
    } else if (topic === "vision/operation/end") {
      const op = await Operation.findByIdAndUpdate(data.operationId, { endTime: data.endTime });
      console.log("operation end", op._id);
    }
  } catch (err) {
    console.error("MQTT parse error", err);
  }
});

export default client;