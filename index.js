const express = require("express");
const app = express();
const cors = require("cors");

let ds = {
  id: 1,
  name: "trie",
  content: `class node{value=null;is_end=null;constructor(){this.value=new Array(26);this.is_end=!1}} class trie{#size;root=new node();constructor(){this.#size=0;for(let i=0;i<this.root.value.length;i++){this.root.value[i]=null}
this.root.is_end=!1}
insert(word){for(let i=0;i<word.length;i++){if((word.charCodeAt(i)>=65&&word.charCodeAt(i)<=90)||(word.charCodeAt(i)>=97&&word.charCodeAt(i)<=122)){continue}else throw new Error("string contains invalid characters.")}
let trav=this.root;for(let i=0;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;if(trav.value[char_index]==null){trav.value[char_index]=new node()}
trav=trav.value[char_index];if(i==word.length-1){trav.is_end=!0;this.#size++}}
return}
get get_size(){return this.#size}
remove(word){if(this.has(word)==!1){throw new Error("The input string doesn't exist in the Trie.")}
let temp=this.root;for(let i=0;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;temp=temp.value[char_index]}
temp.is_end=!1;this.#size--;let current_word_prefix_of_another=!1;for(let i=0;i<26;i++){if(temp.value[i]!=null){current_word_prefix_of_another=!0;break}}
current_word_prefix_of_another==!1?this.#remove_leftover_characters(word):null;return}
#remove_leftover_characters(word){let temp=this.root;let prefix_end_index=-1;let trav=this.root;for(let i=0;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;if(trav.value[char_index].is_end==!0&&i!=word.length-1){temp=trav.value[char_index];prefix_end_index=i}
trav=trav.value[char_index]}
for(let i=prefix_end_index+1;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;let temp_2=temp.value[char_index];temp.value[char_index]=null;temp=temp_2}
return}
has(word){for(let i=0;i<word.length;i++){if((word.charCodeAt(i)>=65&&word.charCodeAt(i)<=90)||(word.charCodeAt(i)>=97&&word.charCodeAt(i)<=122)){continue}else throw new Error("The input string contains invalid characters. Trie doesn't allow insertion of invalid strings")}
let has_word=!0;let trav=this.root;for(let i=0;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;if(trav.value[char_index]==null||(i==word.length-1&&trav.value[char_index].is_end==!1)){has_word=!1;break}
trav=trav.value[char_index]}
return has_word}
startsWith(word){for(let i=0;i<word.length;i++){if((word.charCodeAt(i)>=65&&word.charCodeAt(i)<=90)||(word.charCodeAt(i)>=97&&word.charCodeAt(i)<=122)){continue}else throw new Error("string contains invalid characters.")}
let trav=this.root;let has_word_as_prefix=!0;for(let i=0;i<word.length;i++){let ASCII_code=word.toLowerCase().charCodeAt(i);let char_index=ASCII_code-97;if(trav.value[char_index]==null){has_word_as_prefix=!1;break}
trav=trav.value[char_index]}
return has_word_as_prefix}}`,
};

app.use(cors());

app.get("/ds/trie", (req, res) => {
  console.log("request received.");
  res.json(ds);
});

app.listen(3001, () => {
  console.log("listening on PORT: 3001");
});
