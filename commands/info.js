exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor(2471891)
        .setAuthor("Mayo Clinic", "https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/FierceHealthcare-1510848155/2WFm5vUI_400x400.jpg/2WFm5vUI_400x400.jpg?g.X4eBSsB05SoQ8guptUZVgCvxSU5RdT&itok=K0tE0mIm")
        .setTitle("How much should you drink every day?")
        .setDescription("It's a simple question with no easy answer. Studies have produced varying recommendations over the years. But your individual water needs depend on many factors, including your health, how active you are and where you live. No single formula fits everyone. But knowing more about your body's need for fluids will help you estimate how much water to drink each day.")
        .addField("Health benefits of water", "Water is your body's principal chemical component and makes up about 60 percent of your body weight. Your body depends on water to survive.Every cell, tissue and organ in your body needs water to work properly. For example, water: Gets rid of wastes through urination, perspiration and bowel movements\n\n•Keeps your temperature normal\n•Lubricates and cushions joints\n•Protects sensitive tissues\n\nLack of water can lead to dehydration — a condition that occurs when you don't have enough water in your body to carry out normal functions. Even mild dehydration can drain your energy and make you tired.", true)
        .addField("How much water do you need?", "Every day you lose water through your breath, perspiration, urine and bowel movements. For your body to function properly, you must replenish its water supply by consuming beverages and foods that contain water. So how much fluid does the average, healthy adult living in a temperate climate need? The National Academies of Sciences, Engineering, and Medicine determined that an adequate daily fluid intake is: \n\n•About 15.5 cups (3.7 liters) of fluids for men\n•About 11.5 cups (2.7 liters) of fluids a day for women\n\nThese recommendations cover fluids from water, other beverages and food. About 20 percent of daily fluid intake usually comes from food and the rest from drinks.", false)

    message.channel.send(embed);
}