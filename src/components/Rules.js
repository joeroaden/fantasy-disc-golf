import React from "react";
import background from '../img/grass.png';
import '../App.css'

function Rules(){
  const mainStyle={
    backgroundImage: `url(${background})`,

  }

  const textStyle={
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'larger'

  }


return (
  <React.Fragment>
    <div style={mainStyle}>
        <div style={textStyle}>
    <h1>Goal</h1>
    <p>The goal of this project is to provide more reasons to watch live disc golf and get more enjoyment out of a tournament even when the top few positions are already locked in going into the final round.</p>
    <h1>Rules & Scoring </h1>
    <p>1. Salary Cap - every week each team has a salary cap of 10k to select players based on rating </p>
    <p>2. Choose your top 4 for Men and Women and 1 wild card each - wild card will be the player you believe to play most above their *rating - *points above rating will be added to overall score along with additional points</p>
    <p>3. Players will accumulate points based on where they finish regardless of order - except wild card - this is the player you believe will finish well but also farther above their rating</p>
    <h1>Scoring System - Points</h1>
    <div className="App">
    <table>
        <tr>
          <th>Place</th>
          <th>MPO</th>
          <th>FPO</th>
        </tr>
        <tr>
          <td>1</td>
          <td>250</td>
          <td>250</td>
        </tr>
        <tr>
          <td>2</td>
          <td>225</td>
          <td>230</td>
        </tr>
        <tr>
          <td>3</td>
          <td>220</td>
          <td>210</td>
        </tr>
        <tr>
          <td>4</td>
          <td>215</td>
          <td>190</td>
        </tr>
        <tr>
          <td>5</td>
          <td>210</td>
          <td>170</td>
        </tr>
        <tr>
          <td>6</td>
          <td>200</td>
          <td>150</td>
        </tr>
        <tr>
          <td>7</td>
          <td>198</td>
          <td>130</td>
        </tr>
        <tr>
          <td>8</td>
          <td>196</td>
          <td>110</td>
        </tr>
        <tr>
          <td>9</td>
          <td>194</td>
          <td>100</td>
        </tr>
        <tr>
          <td>10</td>
          <td>192</td>
          <td>90</td>
        </tr>
        <tr>
          <td>11</td>
          <td>190</td>
          <td>80</td>
        </tr>
        <tr>
          <td>12</td>
          <td>185</td>
          <td>70</td>
        </tr>
        <tr>
          <td>13</td>
          <td>183</td>
          <td>60</td>
        </tr>
        <tr>
          <td>14</td>
          <td>181</td>
          <td>50</td>
        </tr>
        <tr>
          <td>15</td>
          <td>180</td>
          <td>40</td>
        </tr>
        <tr>
          <td>16</td>
          <td>178</td>
          <td>30</td>
        </tr>
        <tr>
          <td>17</td>
          <td>176</td>
          <td>25</td>
        </tr>
        <tr>
          <td>18</td>
          <td>174</td>
          <td>20</td>
        </tr>
        <tr>
          <td>19</td>
          <td>172</td>
          <td>15</td>
        </tr>
        <tr>
          <td>20</td>
          <td>170</td>
          <td>10</td>
        </tr>
        <tr>
          <td>21</td>
          <td>165</td>
          <td>5</td>
        </tr>
        <tr>
          <td>22</td>
          <td>163</td>
          <td>0</td>
        </tr>
        <tr>
          <td>23</td>
          <td>161</td>
          <td>-10</td>
        </tr>
        <tr>
          <td>24</td>
          <td>157</td>
          <td>-20</td>
        </tr>
        <tr>
          <td>25</td>
          <td>154</td>
          <td>-30</td>
        </tr>
        <tr>
          <td>26</td>
          <td>150</td>
          <td>-50</td>
        </tr>
        <tr>
          <td>27</td>
          <td>145</td>
          <td>-70</td>
        </tr>
        <tr>
          <td>28</td>
          <td>143</td>
          <td>-90</td>
        </tr>
        <tr>
          <td>29</td>
          <td>141</td>
          <td>-110</td>
        </tr>
        <tr>
          <td>30</td>
          <td>138</td>
          <td>-130</td>
        </tr>
        <tr>
          <td>31</td>
          <td>135</td>
          <td>-150</td>
        </tr>
        <tr>
          <td>32</td>
          <td>130</td>
          <td>-170</td>
        </tr>
        <tr>
          <td>33</td>
          <td>127</td>
          <td>-190</td>
        </tr>
        <tr>
          <td>34</td>
          <td>124</td>
          <td>-210</td>
        </tr>
        <tr>
          <td>35</td>
          <td>120</td>
          <td>-220</td>
        </tr>
        <tr>
          <td>36</td>
          <td>115</td>
          <td>-230</td>
        </tr>
        <tr>
          <td>37</td>
          <td>113</td>
          <td>-240</td>
        </tr>
        <tr>
          <td>38</td>
          <td>110</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>39</td>
          <td>107</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>40</td>
          <td>105</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>41</td>
          <td>95</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>42</td>
          <td>93</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>43</td>
          <td>90</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>44</td>
          <td>87</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>45</td>
          <td>84</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>46</td>
          <td>80</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>47</td>
          <td>78</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>48</td>
          <td>74</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>49</td>
          <td>70</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>50</td>
          <td>65</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>51</td>
          <td>55</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>52</td>
          <td>52</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>53</td>
          <td>50</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>54</td>
          <td>48</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>55</td>
          <td>44</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>56</td>
          <td>40</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>57</td>
          <td>36</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>58</td>
          <td>32</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>59</td>
          <td>28</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>60</td>
          <td>25</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>61</td>
          <td>20</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>62</td>
          <td>18</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>63</td>
          <td>14</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>64</td>
          <td>10</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>65</td>
          <td>8</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>66</td>
          <td>5</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>67</td>
          <td>3</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>68</td>
          <td>1</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>69</td>
          <td>0</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>70</td>
          <td>-5</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>71</td>
          <td>-10</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>72</td>
          <td>-20</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>73</td>
          <td>-30</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>74</td>
          <td>-35</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>75</td>
          <td>-40</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>76</td>
          <td>-50</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>77</td>
          <td>-60</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>78</td>
          <td>-70</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>79</td>
          <td>-80</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>80</td>
          <td>-90</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>81</td>
          <td>-100</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>82</td>
          <td>-120</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>83</td>
          <td>-125</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>84</td>
          <td>-130</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>85</td>
          <td>-140</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>86</td>
          <td>-150</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>87</td>
          <td>-155</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>88</td>
          <td>-160</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>89</td>
          <td>-165</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>90</td>
          <td>-170</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>91</td>
          <td>-180</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>92</td>
          <td>-185</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>93</td>
          <td>-190</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>94</td>
          <td>-195</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>95</td>
          <td>-200</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>96</td>
          <td>-210</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>97</td>
          <td>-220</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>98</td>
          <td>-230</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>99</td>
          <td>-240</td>
          <td>-250</td>
        </tr>
        <tr>
          <td>100</td>
          <td>-250</td>
          <td>-250</td>
        </tr>
      </table>
      </div>

    </div>
      </div>
  </React.Fragment>
);
}



export default Rules;