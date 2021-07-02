---
title: "Graphical state dumping in a Kademlia network"
date: "2021-07-01"
excerpt: "Overview of my Kademlia DHT Rust implementation, with graphical state dumping features for a better debugging experience. In this article I will analyze the dumping techniques used in my library"
cover_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F20%2FChord_network.png&f=1&nofb=1"
---

This is a fairly short article, meant to be read alongside prior knowledge of [Kademlia](https://en.wikipedia.org/wiki/Kademlia) and of my [work](https://github.com/f0lg0/kademlia-dht), you can follow along without any of that though, the main concept here is graphical debugging. I won't spend too much time talking about the protocol itself, so if you want more details check out the [References](https://github.com/f0lg0/kademlia-dht#references) section in my GitHub repo.

<br>
<br>

Inspired by [someone's tweet](https://twitter.com/thingskatedid/status/1386077306381242371) about dumping the state of a program, I've tried to graphically display information about network nodes using [PlantUML](https://plantuml.com/) and this was the result:

![dump](https://raw.githubusercontent.com/f0lg0/kademlia-dht/main/images/dump.png)

<p style="text-align: center; font-size: 18px; font-weight: 200; margin-top: -10px; margin-bottom: 25px; color: var(--soft-text);">Tip: open the image in a new tab</p>

Don't worry if you don't understand what's in the diagram, I will talk about it later. The concept I want to underline is passing a program state to a tool such as PlantUML in order to better debug what's going on in your code.

The data was firstly dumped to a JSON file which was then passed to PlantUML.

<br><br>

## Why?

My program had bugs, many bugs, so I had to debug it efficiently. But how to debug such a complex program?

<br>

As we know, Kademlia lets us locate peers in a p2p network but also lets us store (string) `<key, value>` pairs. Since node lookups, value lookups and other operations happen under the hood we have three options to debug the program:

-   Using a debugger
-   Print statements
-   Next-level graphical diagrams

I've never used a debugger in my entire life and print statements got messy quickly so I've gone with the third option.

<br>
<br>

## What data should I display?

Every Kademlia node has a <span>storage</span> module to store `<key, value` pairs, a <span>routing table</span> of known peers, a <span>pending</span> data structure used for network operations and basic <span>socket</span> data structures.

Exctracting data from HashMaps was pretty straight forward, the most complex thing was iterating through the routing table nested vectors to grab the known contacts. Fortunately, if you loop through a vector in Rust it will ignore empty cells, so I avoided displaying useless data; especially because the number of <span>k-buckets</span> was pretty huge.

<br>

The code is pretty simple, we parse every data structure used and we turn them into JSON objects. Then we finally dump it to a file. Here's the constructed JSON object:

<pre>
let json = serde_json::json!({
	"node": {
		"ip": interface.node.ip,
		"port": interface.node.port,
		"id": format!("{:?}", interface.node.id),
	},
	"routes": {
		"node": {
			"ip": rt.node.ip,
			"port": rt.node.port,
			"id": format!("{:?}", interface.node.id),
		},
		"kbuckets": parsed_buckets,
	},
	"store": parsed_store,
	"rpc": {
		"socket": format!("{:?}", interface.rpc.socket),
		"pending": format!("{:?}", interface.rpc.pending.lock().unwrap()),
		"node": {
			"ip": interface.rpc.node.ip,
			"port": interface.rpc.node.port,
			"id": format!("{:?}", interface.rpc.node.id),
		},
	}
});
</pre>

As you can see the data displayed is pretty simple, nothing fancy, just some IP addresses and IDs. The important thing though is that now we have a window to the program. We can dump data whenever we want in the code so we can take a better look at what's going on.

<br>

## Result

The result is the one you saw at the top of the article:

![dump_again](https://raw.githubusercontent.com/f0lg0/kademlia-dht/main/images/dump.png)

I just passed the JSON file into a `.plantuml` file and the tool took over the diagram. No styling needed.

<br>

This debugging method was pretty useful when I wanted to see what nodes were being contacted, what nodes were still in the pending queue and what data the nodes stored.

Seeing that in a matter of seconds a `<key, value>` pair was instantly stored among 20ish nodes in a network was a great feeling.

<br>

## Thanks

If you found this article interesting, consider following me on [GitHub](https://github.com/f0lg0) and [Twitter](https://twitter/f0lg0).

Thanks for taking the time to read this!

<br>
<br>
<br>
