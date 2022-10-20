# hactober [dev.to pin] Bruteforce

This was thrown together in 10 minutes to test bruteforcing a field on Hacktober's website, so it's definitely not a full demo of the problem but it's as far as I am willing to go. (someone help me reduce that n^6 complexity though 😭)

---

### Why? Well, cus Entropy
- This was done for the purpose of demonstrating that dev's must think of entropy whiel creating auth tokens.
    -  All the discount codes started with "Hack22-sixCharCodeHere"
    - the "sixCharCodeHere" field is an alphanumeric string, which would be good BUT they didn't use any capital alphabets.
    - this was proabably cus they are using base 36 to generate the sixCharCode
        - They are probably using the following algorithm to generate their codes
            - Generating a random number using MATH.random() and then convert it to base 36 using toString(36)
            - Then they just slice it to 6 characters and append it at the back of "Hack22-"
    - the code for swag pack [Tee or Tree] is totally awesome though! [21 letters, proper alphanumeric, 62^21 possibilites!]

---

***NOTE*** -  You will need node 18 and NOT LTS to run this script as it uses the fetch API. <br />
I don't mean any harm and this was only done for the sake of fun.