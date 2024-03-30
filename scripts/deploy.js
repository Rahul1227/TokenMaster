const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TokenMaster"
  const SYMBOL = "TM"

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("TokenMaster")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  // List 10 events
  const occasions = [
    {
      name: "Arijit Singh Live Concert",
      cost: tokens(3),
      tickets: 0,
      date: "Apr 15",
      time: "7:00PM IST",
      location: "Mumbai, India"
    },
    {
      name: "Shah Rukh Khan Fan Meet",
      cost: tokens(1),
      tickets: 125,
      date: "Apr 20",
      time: "6:00PM IST",
      location: "New Delhi, India"
    },
    {
      name: "Shreya Ghosal Sufi Night",
      cost: tokens(0.25),
      tickets: 200,
      date: "May 5",
      time: "8:00PM IST",
      location: "Kolkata, India"
    },
    {
      name: "KK Unplugged Session",
      cost: tokens(5),
      tickets: 0,
      date: "May 12",
      time: "7:30PM IST",
      location: "Bangalore, India"
    },
    {
      name: "Badshah Rap Battle",
      cost: tokens(1.5),
      tickets: 125,
      date: "May 25",
      time: "9:00PM IST",
      location: "Pune, India"
    },
    {
      name: "Deepika Padukone Charity Gala",
      cost: tokens(2.5),
      tickets: 150,
      date: "Jun 10",
      time: "6:30PM IST",
      location: "Jaipur, India"
    },
    {
      name: "Ranbir Kapoor Movie Premiere",
      cost: tokens(2),
      tickets: 100,
      date: "Jul 5",
      time: "8:00PM IST",
      location: "Chennai, India"
    },
    {
      name: "Alia Bhatt Dance Extravaganza",
      cost: tokens(1.75),
      tickets: 180,
      date: "Aug 15",
      time: "7:00PM IST",
      location: "Hyderabad, India"
    },
    {
      name: "Salman Khan Eid Celebration",
      cost: tokens(3.5),
      tickets: 90,
      date: "Sep 1",
      time: "8:30PM IST",
      location: "Lucknow, India"
    },
    {
      name: "Katrina Kaif Fashion Show",
      cost: tokens(2),
      tickets: 120,
      date: "Oct 20",
      time: "6:00PM IST",
      location: "Ahmedabad, India"
    }
]

  for (var i = 0; i < 10; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});