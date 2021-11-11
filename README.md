# RegexWordDetector


My friend uses a chatbot that kicks out anyone who uses a particular pattern in their word selection. Typically a "Bad Word Filter". The chatbot is able to take regex. Since regex is a complex thing to write for a common user, this project builds the project for you.
\[Even Among US makes mistakes filtering these u.u]
Input: A word

Output: A Regex that:
  -> Matches pattern like this. input :tEsT, sentence  TeeeeeSSSSSSTTTTT test testing attest test. In this sentence "TeeeeeSSSSSSTTTTT" "test" "test." will be matched. But not   attest.
  -> Does not contain / in front and / in the end
