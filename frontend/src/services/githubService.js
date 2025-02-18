export const fetchGitHubRepos = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error("Erro ao buscar repositórios");
      }
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Erro:", error);
      return [];
    }
  };